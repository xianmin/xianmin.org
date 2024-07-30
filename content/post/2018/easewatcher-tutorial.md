+++
title = "打造智能监控系统—— EaseWatcher"
date = 2018-11-04T14:20:00+08:00
tags = ["物联网", "IoT"]
categories = ['计算机']
draft = false
toc = false
+++

## 简介
EaseWatcher 是一个自己动手做的智能监控系统，可以检测不受欢迎的访客，捕捉他们的图像，并将通知发送到您的移动设备。

## 系统架构
系统由多个相互连接的组件构成，包括：
- 摄像头接口：与视频摄像头通信
- 存储接口：处理文件传输、图像存储和控制命令
- 触发接口：激活监控系统
- 报警接口：远程通知用户事件

## 硬件组件
- **摄像头**：使用两种IP摄像头，一种是价格约50欧元的Conceptornic Wi-Fi摄像头，另一种是性能更高的Axis型号。
- **移动通知**：使用约17欧元的基本USB AT调制解调器，用于在发生事件时向手机发送警报。
- **触发系统**：使用Arduino Mega板、存在检测开关和继电器。

## Arduino 代码示例
```arduino
int pin1 = 28;
int pin0 = 24;
void setup() {
    pinMode(pin0, OUTPUT);
    digitalWrite(pin0, LOW);
    pinMode(pin1, INPUT);
    digitalWrite(pin1, LOW);
    Serial.begin(9600);
}
void loop() {
    int val = digitalRead(pin1);
    if (val == HIGH) {
        Serial.write(1);
    }
    delay(1000);
}
```

## 中央控制应用
这是一个桌面MDI Windows应用程序，负责整个监控过程的协调。

### 控制面板
配置各种协议，包括触发协议、通知（报警）协议设置和存储协议。

### 摄像头窗口
通过“文件/新建摄像头...”菜单选项配置个别摄像头。

### 配置存储
所有设置存储在应用程序的App.config文件中。

## 移动客户端
使用Xamarin开发的移动应用程序，用于远程监控。

### 连接到主应用程序
启动客户端应用程序后，按下“连接”按钮与主应用程序进行握手。

### 摄像头选择
连接后，客户端会接收到可用摄像头列表，选择一个摄像头即可查看实时画面。

### 照片管理
应用程序提供控制开始/停止摄像头画面、拍照或结束报警模式的功能。

## 代码工作
定义了各种协议接口，如`IWatcherCamera`、`ITrigger`、`IAlarmChannel`和`IStorageManager`。

## 存储协议
实现了两种存储协议：DropBoxProtocol和自定义存储协议。

## 结语
通过本教程，您可以了解如何构建自己的EaseWatcher智能监控系统。更多细节和源代码，请访问[下载页面](https://oneease.com/easewatcher/tutorial/)。

## 参考
- [EaseWatcher - OneEase](https://oneease.com/easewatcher/)
