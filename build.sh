#!/bin/bash
echo "Building webpage..."
vim -E -s index.html << EOF
:source build.vim
:wq
EOF
