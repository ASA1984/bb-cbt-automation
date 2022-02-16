# Bb-CBT Automation

## Introduction
Bb-CBT Automation is Chrome Extension being developed to answer automatically CBT on [BlackBoard](https://bb.kosen-ac.jp/).

## Usage
### Load
1. Clone this repository
1. Open the Extension Management page by typing `chrome://extensions` into the address bar
1. Enable **Developer Mode**
1. Click the **Load unpacked** button and select the extension directory

### Update
1. Fetch this repository
1. Open the Extension Management page
1. Click the reload button of **Bb-CBT Extension**

## Current Funciton
- Saving locally the question texts and the corresponding correct answer by using `chrome.storage` API
- Autofill the correct choice if the page follow both of them:
  - Selection format
  - Single page

## Implementation Schedule
- Hndling all page type to autofill
- SKipping margin page
- Option page
- Sharing the saved data between users with JSON file
