import logging
from logging import FileHandler, Formatter, StreamHandler
from pathlib import Path
import platform
from utility.structure.singleton import SingletonDecorator


@SingletonDecorator
class Log:
    """
    Logger class for logging at application level
    """

    def __init__(self, name: str):
        formatter: Formatter = Formatter(
            fmt="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S",
        )

        log_file: Path = Path(
            __file__
        ).parent / "../../logs/app-orchestrator-ws-server-{}.log".format(platform.node())

        log_file = log_file.resolve().absolute()
        log_file.parent.mkdir(parents=True, exist_ok=True)

        file_handler = FileHandler(log_file, encoding="utf-8")
        file_handler.setFormatter(formatter)
        file_handler.setLevel(logging.DEBUG)

        stream_handler = StreamHandler()
        stream_handler.setFormatter(formatter)
        stream_handler.setLevel(logging.DEBUG)

        self.logger = logging.getLogger(name)
        self.logger.addHandler(file_handler)
        self.logger.addHandler(stream_handler)
        self.logger.setLevel(logging.DEBUG)

    def info(self, msg, *args):
        """
        Print and log 'msg % args' with severity level 'INFO'
        """
        self.logger.info(msg)

    def debug(self, msg, *args):
        """
        Print and log 'msg % args' with severity level 'DEBUG'
        """
        self.logger.debug(msg)

    def warn(self, msg, *args):
        """
        Print and log 'msg % args' with severity level 'WARN'
        """
        self.logger.warning(msg)

    def error(self, msg, *args):
        """
        Print and log 'msg % args' with severity level 'ERROR'
        """
        self.logger.error(msg)

    def exception(self, msg, *args):
        """
        Print and log 'msg % args' with severity 'ERROR'. Exception information is added to the logging message.
        This function should only be called from an exception handler.
        """
        self.logger.exception(msg)
