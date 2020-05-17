---
title: Mac Terminal命令不能使用的解决办法
date: 2020-05-16
isTimeLine: true
categories:
 - Tools
tags:
 - IDE
---

在用终端敲命令的时候发现命令总是不执行(只有cd命令可以正常执行)，返回命令未识别的错误 `-bash: source: command not found`, zsh 和 bash 也不能切换。   


解决步骤：   

1. 命令行输入：         
`export PATH=/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin`   
这样可以保证命令行命令暂时能够使用。这行命令执行完后不要关闭终端。

2. 进入当前Home目录：   
`cd ~/`


3. 创建bash_profile 执行命令：   
`touch .bash_profile`
   


4. 文件内容是你之前配置过的path，把全部内容删除(将自己有用的部分备份，Terminal修复后再加到里面)，加入PATH：   
`export PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin`   
保存文件并退出(不要退出Terminal)

5. 继续执行命令：   
`source .bash_profile`


6. 重启Terminal
