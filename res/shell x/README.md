# shell 命令行光标跳转快捷键和history的用法
Ctrl+a: 跳到命令行首   
Ctrl+e: 跳到命令行尾   
Ctrl+u: 删除光标至命令行首的内容   
Ctrl+k: 删除光标至命令行尾的内容   
Ctrl+<-  跳到前一个单词首部   
Ctrl+->  跳到后一个单词尾部   

Ctrl+l  清屏（clear）   

Esc+.   (键盘按键)上一个命令的最后一个参数   

!$   （命令）上一个命令的最后一个参数,用法如：ls !$    

### history：查看命令历史

history：查看命令历史   
    -c :清空命令历史   
    -d OFFSET [n]: 删除指定条数的命令   
        history -d 500  ：删除第500条命令历史   
        history -d 500 10 : 删除 500-509 条命令历史   
    
    -w: 保存命令历史至历史文件(.~/bash_history)中   

环境变量   
    HISTSIZE:命令历史缓冲区的大小
