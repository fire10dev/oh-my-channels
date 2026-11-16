import json, re, subprocess

# Let's write a script that takes the current r0.json.tmp and streamlines the vo lines
with open('longs/L16-vi/r0.json.tmp') as f:
    d = json.load(f)

# Let's inspect each line in each chapter and craft concise versions
