---

これは私が**初めて**書いたプログラムです．\
本当に酷いコードなのでずっとPrivateにしていましたが，こういったものは恥ずかしがらず公開した方がきっと面白いですし，何より自身の成長度合を測る良い指標となるでしょう．\
もちろん，以下のREADMEも含めて一切手直しはしていません．

This is the **FIRST** program I wrote. \
I kept it private beacause it was so terrible, but I think it's better to publish it without being ashamed, and it will be a good indicator of my growth.\
Of course, I haven't made any changes, including the following README.

---

# Bb-CBT Automation

## Introduction
Bb-CBT Automation is Chrome Extension being developed to answer automatically CBT on [BlackBoard](https://bb.kosen-ac.jp/).

## Usage
### Load
1. Clone this repository
1. Go to `chrome://extensions`
1. Enable **Developer Mode**
1. Click the **Load unpacked** button and select the extension directory

### Update
1. Pull this repository
1. Open the Extension Management page
1. Click the reload button of **Bb-CBT Extension**

## Current Funciton
- Saving locally the question texts and the corresponding correct answers by using `chrome.storage` API
- Autofill the correct choice if the page follow both of them:
  - Selection format
  - Single page

## Implementation Schedule
- Hndling all page type to autofill
- SKipping margin page
- Option page
- Sharing the saved data between users with JSON file
