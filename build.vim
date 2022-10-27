:w | vi list.html
:norm ggVGd
:read !find ./book -maxdepth 2
:g!/\.jpg\|\.jpeg\|\.png\|\.tif\|\.tiff\|\.pdf\|\.svg/d
:g/\.DS_Store/d
:sort
:%norm 0x
:%norm I<img src=".
:%norm A" class="page"><br />
:norm ggo<div class="pagecontainer">
:norm GO</div>
:w | vi index.html 
:norm ggVGd
:read indexbak.html
:norm gg
/LIST
:norm dd
:read list.html
:norm gg
:read !ls ./book
:norm ggdd0v$hd
/\$BOOK\$
:norm 0f$vlllllpggdd
:w
