#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/nbti-prototype/current"
BRANCH="main"

if [ ! -d "$APP_DIR/.git" ]; then
  echo "ERROR: $APP_DIR is not a git repository"
  exit 1
fi

cd "$APP_DIR"
git fetch origin
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

find "$APP_DIR" -maxdepth 1 -type f \( -name 'index.html' -o -name 'styles.css' -o -name 'app.js' \) -print

echo "Deploy finished: $APP_DIR"
