#!/bin/zsh
# Build + render many: tools/batch.sh w002 w003 ...   One line per video; full logs in $TMPDIR/ws-*.log
cd "${0:A:h}/.."
for id in "$@"; do
  ../../shared/tts/.venv/bin/python -I tools/build.py scripts/$id.json > ${TMPDIR:-/tmp}/ws-build-$id.log 2>&1 || { echo "$id: BUILD FAIL"; continue; }
  tools/render.sh $id || echo "$id: RENDER FAIL"
done
echo BATCH DONE
