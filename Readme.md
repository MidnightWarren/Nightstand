# NIGHTSTAND
### A Minimalist Reader for Scanned Books (And More)

## About

Books are enjoyable---when they look right. I've used some
pretty decent ePub and PDF apps, but something was always
lacking in all the apps I tried for scanned books (usually
in a jpeg or png format.)

Well, I had enough. I wanted an app that could easily take a
folder filled with images, and spit out a clean, easy to use
webpage that can run on any device.

Easily zoom in with the hidden settings on the top left
corner, and choose between scroll or book layouts.

Not only can you enjoy reading books, but you can share the
experience on your own website. This tool would be useful
for webcomics, graphic novels, or any projects where you
want to display a series of images in a book layout.

### Useful for:

- Books
- Presentations/slideshows
- Art
- Comics
- Photo collections
- And more!

## Dependencies

Most of the heavy-lifting under the hood is Vim scripting,
Bash, and Javascript. Nightstand has only been tested on
OSX/Unix, so other platforms may need some tweaking.

Otherwise, the code structure is very simple and
lightweight, so compatability shouldn't be a huge problem.

## Quickstart

Unzip the repository and change directories

```
cd ~/path/to/Nightstand/
```

Copy or move your book folder to the ./book directory in
Nightstand. Delete the Alice Sample folder. The files must all have the same naming scheme,
and I reccomend numbering the files with added zeros to
ensure the pages are compiled in the right order. Here's an
example:

```
BookTitle_0001.jpg
BookTitle_0002.jpg
BookTitle_0003.jpg
BookTitle_0004.jpg
BookTitle_0005.jpg
BookTitle_0006.jpg
BookTitle_0007.jpg
BookTitle_0008.jpg
BookTitle_0009.jpg
BookTitle_0010.jpg
BookTitle_0011.jpg
BookTitle_0012.jpg
```

Only put one book folder in ./book at a time. If you want to
switch between multiple books, you can use the ./library folder for
easy storage.

The title of your image folder inside ./book will become the
title of the HTML page. Make sure the folder doesn't have
special characters or emojis, as that may disrupt
compilation.

In the Nightstand folder run:

```
sh build.sh
```

Within seconds you should have a fully functioning
Nightstand page. Open up index.html in your browser of
choice, and enjoy!

## Publishing to the Web

Once your webpage is compiled, you can modify the results to
your heart's content.

The only necessary files for web publishing are:

```
index.html
style.css
features.js
./book
```

Simply upload these files to your web host, and you're all
set.

Be warned: depending on how large your images are, and how
many pages you're compiling, the resulting webpage may be
slow to load. I recommend making sure your images are scaled
and compressed to a reasonable size for a smoother
experience.


## Features for Future Versions

- Click and drag to scroll over images (mobile and desktop)
- Custom background images(?)
- Presentation mode (flip through pages one or two at a time)
- Adjust page brightness and contrast
- Page grid view
- Library browser (multi-book support and browsing between books)
- Support for markdown/html eBooks
