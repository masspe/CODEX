import os
from git import Repo

REPO_PATH = "/tmp/myrepo"
repo = Repo(REPO_PATH)

def commit_and_push(code: str, prompt: str):
    file_path = os.path.join(REPO_PATH, "generated.py")
    with open(file_path, "w") as f:
        f.write(code)
    
    repo.git.add(file_path)
    commit_msg = f"feat: {prompt[:50]}"
    commit = repo.index.commit(commit_msg)
    
    origin = repo.remote(name="origin")
    origin.push()
    
    return file_path, commit.hexsha

def create_release(version: str):
    tag = f"v{version}"
    repo.create_tag(tag)
    origin = repo.remote(name="origin")
    origin.push(tag)
    url = f"https://github.com/<user>/<repo>/releases/tag/{tag}"
    return tag, url
