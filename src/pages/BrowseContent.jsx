import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from 'lucide-react';

const BrowseContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration
  const contentItems = [
    { id: 1, title: 'Beach Sunset', type: 'image', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop' },
    { id: 2, title: 'Mountain View', type: 'image', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=200&fit=crop' },
    { id: 3, title: 'City Lights', type: 'image', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=200&fit=crop' },
    // Add more mock items as needed
  ];

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6">
      <h1 className="text-2xl font-bold mb-6">Browse Content</h1>
      <div className="mb-6">
        <Label htmlFor="search">Search Content</Label>
        <div className="flex mt-1">
          <Input
            type="text"
            id="search"
            placeholder="Search for images, videos, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="ml-2 h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contentItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={item.url} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">Type: {item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseContent;
