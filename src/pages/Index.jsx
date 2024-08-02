import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Search, Upload } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Visual Content Management System</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
              <Camera className="h-12 w-12 text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome to your VCMS</h2>
              <p className="text-gray-500 mb-6">Upload, manage, and share your visual content with ease.</p>
              <div className="flex space-x-4">
                <Button>
                  <Upload className="mr-2 h-4 w-4" /> Upload Content
                </Button>
                <Button variant="outline">Browse Gallery</Button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="max-w-xl mx-auto">
              <Label htmlFor="search">Search Content</Label>
              <div className="flex mt-1">
                <Input
                  type="text"
                  id="search"
                  placeholder="Search for images, videos, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="ml-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
