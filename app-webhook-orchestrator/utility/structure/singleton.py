from typing import Any
class SingletonDecorator:
    def __init__(self, klass):
        self.klass = klass
        self.instance = None
    def __call__(self, *args: Any, **kwds: Any) -> Any:
        if self.instance == None:
            self.instance = self.klass(*args, **kwds)
        return self.instance
        