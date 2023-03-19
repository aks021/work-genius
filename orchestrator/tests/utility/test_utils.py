import unittest.mock
import os, sys

sys.path.append(os.path.realpath(os.path.dirname(__file__) + "./../../"))

from utility.utils import *

class TestGenericUtils(unittest.TestCase):
    def test_getenv(self):
        env = getenv()
        assert env == "development"

        os.environ["APP_ENV"] = "production"
        env = getenv()
        assert env == "production"
    
    def test_load_yaml_config(self):
        config = load_yaml_config('config/development.yml')
        assert "websocket" in config.keys()

