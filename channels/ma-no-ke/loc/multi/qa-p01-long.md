# QA giọng p01-long (Whisper small nghe lại, so kịch bản)

| thứ tiếng | câu | WER TB | câu > 25% | từ/phút |
|---|---|---|---|---|
| en | 51 | 4.8% | 2 | 187 |
| fr | 51 | 9.9% | 8 | 203 |
| es | 51 | 4.0% | 1 | 186 |

## en: WER trung bình 4.8%, 2 câu đáng ngờ, 187 từ/phút

- **38%** BT: «At two oh seven, the comments blew up.»
  - máy nghe: «At 207, the comments blew up.»
- **31%** BT: «At two fifteen, he nodded off. Nine thousand people stayed awake for him.»
  - máy nghe: «At 2.15 he nodded off. 9,000 people stayed awake for him.»

## fr: WER trung bình 9.9%, 8 câu đáng ngờ, 203 từ/phút

- **50%** BT: «Le cuiseur à riz.»
  - máy nghe: «Le Cuiseur Harry.»
- **38%** BT: «À deux heures sept, les commentaires ont explosé.»
  - máy nghe: «À 2 h 7, les commentaires ont explosé.»
- **36%** BT: «Ma tête se remet en place. Je m'assieds, je fais craquer mon cou. Tung s'évanouit. Trois cent mille personnes applaudissent.»
  - máy nghe: «Ma tête se remet en place. Je m'assiette, je fais craquer mon coup. Tongue, Cévanoui, 300 000 personnes, applaudissent.»
- **33%** HANH: «Mamie Tu. Fais attention à toi.»
  - máy nghe: «Mamy Tew, fais attention à toi.»
- **31%** BT: «À deux heures quinze, il a piqué du nez. Neuf mille personnes veillaient à sa place.»
  - máy nghe: «À 2h15, il a piqué du nez. 9 000 personnes veillaient à sa place.»
- **31%** BT: «Quel endroit est sombre, chaud, et fait juste la taille d'une tête ?»
  - máy nghe: «quel endroit est sombre, chaud et fait juste la taille d'une deux coins, d'une tête.»
- **27%** HANH: «Tung ! Qui t'a appris à emmitoufler les vieux comme ça ! Ta mère va suffoquer !»
  - máy nghe: «Donc, qui t'a appris à m'étouffler les vieux comme ça? Ta mère va se suffoquer?»
- **26%** MN: «Tout le web est devenu dingue. Les gens zoomaient sur chaque pixel. Un maître feng shui vendait des bracelets anti-ma lai à moins cinquante pour cent.»
  - máy nghe: «Tout le web est devenu dingue. Les gens zoomaient sur chaque pixel. Un maître fin chui vendait des bracelets anti-malay à moins 50%.»

## es: WER trung bình 4.0%, 1 câu đáng ngờ, 186 từ/phút

- **31%** HANH: «¡Tung! ¿Quién te enseñó a tapar así a una anciana? ¡Vas a asfixiar a tu mamá!»
  - máy nghe: «¿Quién te enseñó a tapar hacia una anciana, hacia una anciana? Vas a asfixiar a tu mamá.»
