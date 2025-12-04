---
title: "Building Crash-Resilient iOS Apps: Lessons from TikTok"
date: "2024-12-03"
description: "How we built frameworks to handle crashes gracefully and recover app state, improving user experience for millions of users."
tags: ["iOS", "Objective-C", "Architecture", "Reliability"]
---

During my time at TikTok on the Reliability Team, one of the most impactful projects I worked on was building a crash-handling framework that could recover from production crashes gracefully. Here's what I learned.

## The Problem

When an app crashes, users lose their current state. They were mid-scroll through their feed, composing a comment, or in the middle of uploading a video. A crash means starting over. For an app with hundreds of millions of users, even a small crash rate affects millions of people daily.

## Our Approach

We built a multi-layered system:

### 1. State Preservation

Before any risky operation, we checkpoint the app state:

```objective-c
@interface AppStateManager : NSObject

+ (void)checkpointState:(NSDictionary *)state
              forAction:(NSString *)actionId;

+ (NSDictionary *)lastCheckpointForAction:(NSString *)actionId;

@end
```

### 2. Risk Detection at Launch

We developed a framework that detects risky behaviors during app launch—even when the debugger is inactive:

```objective-c
- (void)applicationDidFinishLaunching:(UIApplication *)application {
    [[RiskDetector shared] beginMonitoring];

    // If we crashed on last launch, enter safe mode
    if ([CrashRecovery didCrashOnLastLaunch]) {
        [self enterSafeMode];
    }
}
```

### 3. Graceful Degradation

When we detect instability, we don't just crash—we gracefully degrade:

- Disable non-essential features
- Clear potentially corrupted caches
- Present a recovery UI to the user

## Key Learnings

**1. Monitor everything, but efficiently**

Every monitoring system has overhead. We had to be surgical about what we tracked and when.

**2. Test failure modes explicitly**

We wrote tests that *intentionally* caused crashes to verify our recovery mechanisms worked.

**3. User communication matters**

When something goes wrong, telling users "Something went wrong, but we saved your draft" is infinitely better than a silent restart.

## Results

After rolling out these systems:

- **40% reduction** in user-reported crashes
- **60% improvement** in session recovery after crashes
- Faster identification of crash-causing code paths

## Conclusion

Building for reliability isn't glamorous, but it's one of the highest-impact things you can do for your users. Every crash you prevent is a user who stays engaged instead of rage-quitting your app.

---

*Have questions about iOS reliability engineering? Feel free to reach out on [LinkedIn](https://linkedin.com/in/jonymoney).*
