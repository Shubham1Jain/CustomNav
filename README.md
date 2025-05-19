# Custom Navigation Demo with React Native

This project demonstrates a custom animated navigation system built with React Native, featuring:

- **Animated Drawer Navigation**: Custom side drawer with smooth 3D rotation effect
- **Bottom Tab Navigation**: Text-based tab navigation inside the main screen
- **Stack Navigation**: Stack-based navigation within home tab
- **Nested Navigation**: Properly structured nested navigators (Drawer → Tab → Stack)

## Demo

https://drive.google.com/file/d/1qiPjAPAi8Oeg5KozGk7viHzqy-_zYEGE/view?usp=sharing

## Navigation Structure

```
DrawerNavigator (Custom Animated)
│
├─── MainScreenWrapper (handles drawer animation)
│     │
│     └─── BottomTabNavigator
│          │
│          ├─── HomeStack (Stack Navigator)
│          │    │
│          │    ├─── Home
│          │    ├─── Screen1
│          │    └─── Screen2
│          │
│          └─── Contact
└─── FAQ
```

## Features

- Custom 3D drawer animation with rotation, scaling and translation effects
- Proper TypeScript integration for type-safe navigation
- Clean UI design with consistent styling across screens
- Custom SVG icons integration
- Smooth animations powered by React Native Reanimated

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/CustomNav.git
cd CustomNav

# Install dependencies
yarn install
```

### Running the app

```sh
# Start Metro
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android
```

## Dependencies

- React Navigation v7
- React Native Reanimated
- React Native SVG
- React Native Vector Icons

## Implementation Details

The drawer animation uses React Native Reanimated to create a custom effect where the main screen tilts and moves to reveal the drawer underneath. Key animation properties include:

- `rotateZ`: Rotates the main screen for a 3D effect
- `translateX/Y`: Moves the main screen to reveal the drawer
- `borderRadius`: Rounds the corners of the main screen when drawer is open

## Learn More

- [React Navigation Documentation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg)

