# .gitignore 

## 특징

항상 최상위 Directory에 존재해야한다.

## 문법

```md
# : comments

# no .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory
doc/**/*.pdf
```

## 출처

https://nesoy.github.io/articles/2017-01/Git-Ignore
