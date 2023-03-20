import unittest.mock
import os, sys

sys.path.append(os.path.realpath(os.path.dirname(__file__) + "./../../../"))
from src.utility.structure.singleton import SingletonDecorator

@SingletonDecorator
class DummyClass:
    def __init__(self) -> None:
        pass


class TestGenericUtils(unittest.TestCase):
    def test_validate_singleton(self):
        obj1 = DummyClass()
        obj2 = DummyClass()
        assert obj1 == obj2
