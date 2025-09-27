from fastapi import FastAPI, Body
from git_service import commit_and_push, create_release
from openai_service import generate_code

app = FastAPI()

@app.post("/generate")
def generate(prompt: str = Body(..., embed=True)):
    code = generate_code(prompt)
    file_path, commit_hash = commit_and_push(code, prompt)
    return {"status": "ok", "file": file_path, "commit": commit_hash, "code": code}

@app.post("/release")
def release(version: str = Body(..., embed=True)):
    tag, url = create_release(version)
    return {"status": "release_created", "tag": tag, "url": url}
