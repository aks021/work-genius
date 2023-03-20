import os
from pathlib import Path
from yaml import load, Loader
from typing import Dict

def getenv():
    """
    About: Returns the app environment
    Args:: None
    Returns: app env - development or uat or prod
    """
    env = os.environ.get(
        "APP_ENV", "development"
    )  # env defaults to development for dev purpose, in docker APP_ENV is set
    return env

def load_yaml_config(config_file_rel_path: str) -> Dict:
    """
    About: Load the YAML config file at the given relative path (to this file's directory).
    Args::
        config_file_rel_path: string - Relative file path name
    Returns: config object in dictionary
    """
    base_dir = Path(__file__).parent.parent
    config = None

    with Path.open(base_dir / config_file_rel_path, "r") as yaml_file:
        config = load(yaml_file, Loader=Loader)
        yaml_file.close()
    return config

