#!/bin/sh

# uncomment the line 46
open ios/pdf417/AppDelegate.m

npm cache clean && npm install

open ios/pdf417.xcodeproj/
