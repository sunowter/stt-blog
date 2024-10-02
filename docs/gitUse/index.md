# git 常用命令

### 1、合并某个分支的某个文件

```js
git checkout 分支名 文件路径
例：git checkout origin/dev src/component/goods/goodDetail
```
### 2、删除本地分支

```js
git branch -d 分支名
```

### 3、删除远程分支

```js
git push origin --delete 分支名
```

### 4、本地分支重命名

```js
git branch -m 老的分支名 新的分支名
```

### 5、查看已有 tag

```js
git tag
```

### 6、新建 tag

```js
git tag  新建的tag名
```

### 7、新建有备注信息的 tag

```js
git tag -a 新建的tag名 -m '备注信息'
```

### 8、给指定的 commit 号打 tag

```js
git tag -a 新建的tag名 commit号
```

### 9、推送本地某个 tag 到远程

```js
git push origin tag名
```

### 10、推送本地所有 tag 到远程

```js
git push origin --tags
```

### 11、删除本地 tag

```js
git tag -d tag名
```

### 12、删除远程 tag

```js
git push origin :refs/tags/tag名
```

### 13、解决 Your branch is based on 'origin/xxxx', but the upstream is gone
```js
第一步：git config --get branch.bBranch.remote

> origin

第二步：git config--getbranch.bBranch.merge>refs/heads/aBranch

第三步：git branch --set-upstream-to=origin/bBranch
```
### 14、推送新项目到远程仓库
```js
第一步：git init（初试化）

第二步：git config --global user.name "Administrator"（配置用户信息）

git config --global user.email "admin@example.com"

第三步：git remote add origin 远程仓库地址
```
### 15、回退到上一个版本

```js
git reset --hard HEAD^
```

### 16、回退到指定版本

```js
git reset --hard 版本号
```

### 17、强拉远程，覆盖本地

```js
git fetch --all

git reset --hard origin/master
```

### 18、强推本地到远程

```js
git push -f origin master
```

### 19、基于 commitId 创建新的分支

```js
git checkout -b yourNewBranch commitId
```

### 20、合并指定的 commitId 分支代码

```js
git cherry-pick commitId
```
