#!/bin/sh
# clean cache

# uncomment the line 34
open ios/pdf417/AppDelegate.m

npm cache clean && npm install

react-native run-ios
