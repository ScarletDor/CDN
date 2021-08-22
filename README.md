git add . 
git commit -m'dnjk'
git push origin master

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


https://cdn.jsdelivr.net/gh/zc998800/cdn/image/favicon.ico

推送到github或者码云上指令，
到项目文件中打开git bash 输入
git add . 

然后
git commit -m'dnjk'

最后
git push origin master

强制push本地仓库到远程 (这种情况不会进行merge, 强制push后远程文件可能会丢失 不建议使用此方法)
git push -u origin master -f


-------------------------------------
*首先，造成这个错误很有可能是网络不稳定，连接超时导致的，
如果再次尝试后依然报错，可以执行下面的命令。

打开Git命令页面，执行git命令脚本：修改设置，解除ssl验证

git config --global http.sslVerify "false"
