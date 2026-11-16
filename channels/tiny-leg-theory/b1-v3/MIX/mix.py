# Mixed cast: Pen = "you now", Buff = myth-buster + "future you" (the stranger) + closer.
import json
J = json.load(open("../J/project.json")); A = json.load(open("../A/project.json"))
BUFF = {2, 3, 4, 11, 16, 17}
shots = []
for i, (a, j) in enumerate(zip(A["shots"], J["shots"])):
    s = json.loads(json.dumps(j if i in BUFF else a))
    for l in s["layers"]:
        if "id" in l: l["id"] = f"s{i}-{l['id']}"
    shots.append(s)
p = dict(J, shots=shots)
json.dump(p, open("project.json", "w"), indent=1)
print(len(shots), "shots;", "Buff:", sorted(BUFF))
