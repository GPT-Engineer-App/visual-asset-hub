import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from 'lucide-react';

const UploadContent = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement file upload logic
    console.log('Uploading:', { file, title, description });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Upload Content</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="file">Select File</Label>
          <Input id="file" type="file" onChange={handleFileChange} className="mt-1" />
        </div>
        <div className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1"
          />
        </div>
        <Button type="submit">
          <Upload className="mr-2 h-4 w-4" /> Upload Content
        </Button>
      </form>
    </div>
  );
};

export default UploadContent;
