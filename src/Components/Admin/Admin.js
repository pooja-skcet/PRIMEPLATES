import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [menuItem, setMenuItem] = useState({
    name: '',
    description: '',
    packageType: 'standard',
    menuType: 'breakfast',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would typically send `menuItem` to your backend here
    console.log('Menu item added:', menuItem);
    // Reset form
    setMenuItem({
      name: '',
      description: '',
      packageType: 'standard',
      menuType: 'breakfast',
      price: ''
    });
  };

  return (
    <div>
    <div>
    <header className="header7">
      <h2>PrimePlates</h2>
      <nav className="navigation7">
      <h4><a href="/Home">HomePage</a></h4>
        
      </nav>
    </header>
    </div>
    <div className="newsection1">
    <div className="admin-form-container1">
    
      <h2>Menu Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Item Name:
            <input
              type="text"
              name="name"
              value={menuItem.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={menuItem.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Package Type:
            <select
              name="packageType"
              value={menuItem.packageType}
              onChange={handleChange}
              required
            >
              <option value="lite">Lite</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Menu Type:
            <select
              name="menuType"
              value={menuItem.menuType}
              onChange={handleChange}
              required
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={menuItem.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add Menu Item</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Admin;
