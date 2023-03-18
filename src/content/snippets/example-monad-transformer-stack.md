---
language: "Haskell"
---

# Example Monad Transformer Stack

```haskell
{-# LANGUAGE GeneralizedNewtypeDeriving #-}

module Main where

import Control.Monad.Reader
import Control.Monad.Writer
import Control.Monad.Except

data Env = Env
  deriving (Eq, Show)

newtype AppM a = MkAppM
  { unAppM :: ReaderT Env (WriterT [String] (ExceptT String IO)) a
  } deriving ( Functor
             , Applicative
             , Monad
             , MonadIO
             , MonadReader Env
             , MonadWriter [String]
             , MonadError String
             )

runAppM :: Env -> AppM a -> IO  (Either String (a, [String]))
runAppM env = runExceptT . runWriterT . flip runReaderT env . unAppM

app :: AppM ()
app = do
  env <- ask

  liftIO $ print env

  tell ["A"]
  tell ["B"]
  tell ["C"]

  throwError "Damn"

main :: IO ()
main = runAppM Env app >>= print
```
