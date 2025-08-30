import React, { useState, useEffect, useCallback } from 'react';
import './NestedCheckbox.css';

const NestedCheckbox = () => {
  // Initial data structure with more comprehensive state tracking
  const [data, setData] = useState({
    selectAll: false,
    fruits: {
      checked: false,
      indeterminate: false,
      items: {
        apple: false,
        banana: false,
        orange: false,
        mango: false
      }
    },
    vegetables: {
      checked: false,
      indeterminate: false,
      items: {
        carrot: false,
        broccoli: false,
        spinach: false,
        potato: false
      }
    }
  });

  // Update parent state based on children - enhanced logic
  const updateParentState = useCallback((category) => {
    setData(prev => {
      const items = prev[category].items;
      const checkedItems = Object.values(items).filter(Boolean);
      const totalItems = Object.keys(items).length;

      if (checkedItems.length === 0) {
        // No children checked
        return {
          ...prev,
          [category]: {
            ...prev[category],
            checked: false,
            indeterminate: false
          }
        };
      } else if (checkedItems.length === totalItems) {
        // All children checked
        return {
          ...prev,
          [category]: {
            ...prev[category],
            checked: true,
            indeterminate: false
          }
        };
      } else {
        // Some children checked (indeterminate state)
        return {
          ...prev,
          [category]: {
            ...prev[category],
            checked: false,
            indeterminate: true
          }
        };
      }
    });
  }, []);

  // Update select all state based on all categories - enhanced logic
  const updateSelectAllState = useCallback(() => {
    setData(prev => {
      const fruitsChecked = prev.fruits.checked;
      const vegetablesChecked = prev.vegetables.checked;
      const fruitsIndeterminate = prev.fruits.indeterminate;
      const vegetablesIndeterminate = prev.vegetables.indeterminate;

      // Select All is true only when both categories are fully checked
      if (fruitsChecked && vegetablesChecked) {
        return { ...prev, selectAll: true };
      } 
      // Select All is false when any category is indeterminate or partially checked
      else if (fruitsIndeterminate || vegetablesIndeterminate || 
               (fruitsChecked && !vegetablesChecked) || 
               (!fruitsChecked && vegetablesChecked)) {
        return { ...prev, selectAll: false };
      } 
      // Select All is false when no categories are checked
      else {
        return { ...prev, selectAll: false };
      }
    });
  }, []);

  // Handle select all checkbox - enhanced to ensure all items are properly updated
  const handleSelectAll = (checked) => {
    setData(prev => ({
      selectAll: checked,
      fruits: {
        ...prev.fruits,
        checked: checked,
        indeterminate: false,
        items: Object.keys(prev.fruits.items).reduce((acc, key) => {
          acc[key] = checked;
          return acc;
        }, {})
      },
      vegetables: {
        ...prev.vegetables,
        checked: checked,
        indeterminate: false,
        items: Object.keys(prev.vegetables.items).reduce((acc, key) => {
          acc[key] = checked;
          return acc;
        }, {})
      }
    }));
  };

  // Handle category checkbox - enhanced to ensure all children are properly updated
  const handleCategoryChange = (category, checked) => {
    setData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        checked: checked,
        indeterminate: false,
        items: Object.keys(prev[category].items).reduce((acc, key) => {
          acc[key] = checked;
          return acc;
        }, {})
      }
    }));
  };

  // Handle individual item checkbox - enhanced with better state propagation
  const handleItemChange = (category, item, checked) => {
    setData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        items: {
          ...prev[category].items,
          [item]: checked
        }
      }
    }));
  };

  // Enhanced useEffect to update parent states when children change
  useEffect(() => {
    updateParentState('fruits');
    updateParentState('vegetables');
  }, [data.fruits.items, data.vegetables.items, updateParentState]);

  // Enhanced useEffect to update select all state when categories change
  useEffect(() => {
    updateSelectAllState();
  }, [data.fruits.checked, data.fruits.indeterminate, data.vegetables.checked, data.vegetables.indeterminate, updateSelectAllState]);

  // Helper function to get total checked items
  const getTotalCheckedItems = () => {
    const fruitsChecked = Object.values(data.fruits.items).filter(Boolean).length;
    const vegetablesChecked = Object.values(data.vegetables.items).filter(Boolean).length;
    return fruitsChecked + vegetablesChecked;
  };

  // Helper function to get total items
  const getTotalItems = () => {
    return Object.keys(data.fruits.items).length + Object.keys(data.vegetables.items).length;
  };

  return (
    <section className="checkbox-section">
      <div className="checkbox-container">
        <h2>Nested Checkbox Component</h2>
        <p>Test the nested checkbox functionality with proper parent-child relationships</p>
        
        <div className="checkbox-group">
          {/* Select All Checkbox */}
          <div className="checkbox-item select-all">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={data.selectAll}
                onChange={(e) => handleSelectAll(e.target.checked)}
                className="checkbox-input"
                aria-label="Select all items"
              />
              <span className="checkmark"></span>
              <span className="label-text">Select All</span>
            </label>
          </div>

          {/* Fruits Category */}
          <div className="checkbox-item category">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={data.fruits.checked}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = data.fruits.indeterminate;
                  }
                }}
                onChange={(e) => handleCategoryChange('fruits', e.target.checked)}
                className="checkbox-input"
                aria-label="Select all fruits"
              />
              <span className="checkmark"></span>
              <span className="label-text">Fruits</span>
            </label>
            
            <div className="sub-items">
              {Object.entries(data.fruits.items).map(([item, checked]) => (
                <label key={item} className="checkbox-label sub-item">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => handleItemChange('fruits', item, e.target.checked)}
                    className="checkbox-input"
                    aria-label={`Select ${item}`}
                  />
                  <span className="checkmark"></span>
                  <span className="label-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Vegetables Category */}
          <div className="checkbox-item category">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={data.vegetables.checked}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = data.vegetables.indeterminate;
                  }
                }}
                onChange={(e) => handleCategoryChange('vegetables', e.target.checked)}
                className="checkbox-input"
                aria-label="Select all vegetables"
              />
              <span className="checkmark"></span>
              <span className="label-text">Vegetables</span>
            </label>
            
            <div className="sub-items">
              {Object.entries(data.vegetables.items).map(([item, checked]) => (
                <label key={item} className="checkbox-label sub-item">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => handleItemChange('vegetables', item, e.target.checked)}
                    className="checkbox-input"
                    aria-label={`Select ${item}`}
                  />
                  <span className="checkmark"></span>
                  <span className="label-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="status-display">
          <h3>Current Status:</h3>
          <div className="status-grid">
            <div className="status-item">
              <strong>Select All:</strong> {data.selectAll ? '✅' : '❌'}
            </div>
            <div className="status-item">
              <strong>Fruits:</strong> {data.fruits.checked ? '✅' : data.fruits.indeterminate ? '⚠️' : '❌'}
            </div>
            <div className="status-item">
              <strong>Vegetables:</strong> {data.vegetables.checked ? '✅' : data.vegetables.indeterminate ? '⚠️' : '❌'}
            </div>
            <div className="status-item">
              <strong>Total Selected:</strong> {getTotalCheckedItems()}/{getTotalItems()} items
            </div>
          </div>
        </div>

        <div className="testing-instructions">
          <h3>Testing Instructions:</h3>
          <ol>
            <li><strong>Select All Test:</strong> Click "Select All" → All checkboxes should be checked</li>
            <li><strong>Category Test:</strong> Click "Fruits" → All fruits should be checked</li>
            <li><strong>Indeterminate Test:</strong> Check some fruits → "Fruits" should show ⚠️</li>
            <li><strong>Child Update Test:</strong> Check individual items → Parent state should update</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default NestedCheckbox;
