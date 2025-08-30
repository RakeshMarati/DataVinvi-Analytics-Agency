# DataVinci Assignment

This project implements both tasks from the DataVinci assignment:

## 🎯 Task 1: Responsive Layout Implementation

A fully responsive website design that works seamlessly on both **Desktop** and **Mobile** devices.

### Features:
- **Mobile-first responsive design** with breakpoints at 768px and 1024px
- **Navigation bar** that collapses into a hamburger menu on mobile
- **Hero section** with gradient backgrounds and responsive grid layouts
- **Content section** with cards that reflow from multi-column to single-column
- **Smooth animations** and hover effects
- **Accessibility features** including proper focus states and keyboard navigation

### Responsive Breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 769px - 1023px (2-column grid)
- **Desktop**: > 1024px (2-column grid with larger spacing)

## 🎯 Task 2: Nested Checkbox Component

A fully functional nested checkbox component with proper parent-child relationships.

### Features:
- **Select All** checkbox that controls all categories and items
- **Parent categories** (Fruits, Vegetables) that control their child items
- **Indeterminate states** when some but not all children are selected
- **Automatic state propagation** both upward and downward
- **Real-time status display** showing current selection states

### Behavior:
1. **Select All** → Checks/unchecks everything
2. **Parent Category** → Checks/unchecks all children in that category
3. **Individual Items** → Updates parent state (checked, unchecked, or indeterminate)
4. **Indeterminate State** → Shows when some children are selected

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
# Navigate to the project directory
cd datavinci

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open in your browser at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🧪 Testing the Components

### Responsive Design Testing:
1. Open the app in your browser
2. Use Chrome DevTools or browser responsive design mode
3. Test different screen sizes (mobile, tablet, desktop)
4. Verify that the navigation collapses on mobile
5. Check that content reflows properly

### Nested Checkbox Testing:
1. **Select All Test**: Click "Select All" → All checkboxes should be checked
2. **Category Test**: Click "Fruits" → All fruits should be checked
3. **Indeterminate Test**: Check some fruits → "Fruits" should show indeterminate state
4. **Child Update Test**: Check individual items → Parent state should update accordingly

## 🎨 Design Features

- **Modern gradient backgrounds** with smooth transitions
- **Card-based layouts** with subtle shadows and hover effects
- **Consistent spacing** using CSS Grid and Flexbox
- **Typography hierarchy** with proper font weights and sizes
- **Color scheme** following modern design principles
- **Smooth animations** for enhanced user experience

## 📱 Mobile-First Approach

The design follows a mobile-first responsive approach:
1. **Base styles** are written for mobile devices
2. **Media queries** scale up for larger screens
3. **Touch-friendly** button sizes and spacing
4. **Optimized layouts** for small screens

## ♿ Accessibility Features

- **Keyboard navigation** support
- **Focus indicators** for interactive elements
- **Semantic HTML** structure
- **Proper ARIA labels** for screen readers
- **Color contrast** meeting WCAG guidelines
- **Touch targets** sized appropriately for mobile

## 🔧 Technical Implementation

- **React.js** with functional components and hooks
- **CSS Grid and Flexbox** for responsive layouts
- **CSS Custom Properties** for consistent theming
- **Mobile-first media queries** for responsive design
- **State management** using React useState and useEffect
- **Event handling** for checkbox interactions

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js          # Responsive navigation with hamburger menu
│   ├── Navigation.css         # Navigation styles
│   ├── HeroSection.js         # Hero section with call-to-action
│   ├── HeroSection.css        # Hero section styles
│   ├── ContentSection.js      # Services content with cards
│   ├── ContentSection.css     # Content section styles
│   ├── NestedCheckbox.js      # Nested checkbox component
│   └── NestedCheckbox.css     # Checkbox component styles
├── App.js                     # Main application component
├── App.css                    # Global styles
└── index.js                   # Application entry point
```

## 🎉 Success Criteria Met

✅ **Responsive Layout**: Works perfectly on all device sizes  
✅ **Mobile Navigation**: Hamburger menu with smooth animations  
✅ **Content Reflow**: Graceful transition from multi-column to single-column  
✅ **Nested Checkbox Logic**: Proper parent-child state management  
✅ **Indeterminate States**: Visual feedback for partial selections  
✅ **Select All Functionality**: Controls all checkboxes correctly  
✅ **Accessibility**: Keyboard navigation and screen reader support  
✅ **Modern Design**: Beautiful gradients and smooth animations  

The implementation successfully demonstrates both responsive design principles and complex checkbox logic, providing a solid foundation for the DataVinci assignment requirements.
