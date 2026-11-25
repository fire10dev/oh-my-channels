#!/bin/zsh
# Whole batch, one short at a time (finished files land as we go). Order = EN views, then unposted.
cd "${0:A:h}/.."
ORDER=(sx-ix003-cabin sx-ix003-noday sx-ix002-well sx-ix001-hotrack sx-ix001-noflush sx-ix005-voice sx-ix004-cabin sx-ix005-lemons sx-ix004-huet sx-ix002-300club
 sx-ix006-oxygen sx-ix006-hungry sx-ix007-window sx-ix007-slot sx-ix008-packs sx-ix008-cot sx-ix009-berthing sx-ix009-meals sx-ix010-door sx-ix010-chef
 sx-ix011-night sx-ix011-bears sx-ix012-smoke sx-ix012-rooms sx-ix013-citadel sx-ix013-stuck sx-ix014-sealed sx-ix014-springs sx-ix015-flannan sx-ix015-bunks sx-ix016-wind sx-ix016-hourly)
for L in ${@:-es pt fr}; do for S in $ORDER; do
  if python3 tools/make_loc.py $S $L > build/log-$S-$L.txt 2>&1; then grep -E "^(DONE|skip)" build/log-$S-$L.txt | tail -1
  else echo "FAIL $S $L (build/log-$S-$L.txt)"; fi
done; done
echo BATCH END
