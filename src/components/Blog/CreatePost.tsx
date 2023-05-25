import { Post } from 'types/blog';
import { useState } from 'react';
import { useAddPostMutation } from 'services/blog';

const initialState: Omit<Post, 'id'> = {
  description: '',
  featuredImage: '',
  publishDate: '',
  published: false,
  title: '',
};
const CreatePost = () => {
  const editingPost = false;

  const [formData, setFormData] = useState(initialState);

  const [addPost, addPostResult] = useAddPostMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    await addPost(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Title'
          required
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='featuredImage'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Featured Image
        </label>
        <input
          type='text'
          id='featuredImage'
          name='featuredImage'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Url image'
          required
          value={formData.featuredImage}
          onChange={handleChange}
        />
      </div>
      <div className='mb-6'>
        <div>
          <label
            htmlFor='description'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Description
          </label>
          <textarea
            id='description'
            rows={3}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
            placeholder='Your description...'
            name='description'
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='mb-6'>
        <label
          htmlFor='publishDate'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Publish Date
        </label>
        <input
          type='datetime-local'
          id='publishDate'
          name='publishDate'
          className='block w-56 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Title'
          required
          value={formData.publishDate}
          onChange={handleChange}
        />
      </div>
      <div className='flex items-center mb-6'>
        <input
          id='publish'
          type='checkbox'
          className='w-4 h-4 focus:ring-2 focus:ring-blue-500'
          checked={formData.published}
          onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
        />
        <label htmlFor='publish' className='ml-2 text-sm font-medium text-gray-900'>
          Publish
        </label>
      </div>
      <div>
        {editingPost ? (
          <button
            type='submit'
            className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800'
          >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Update Post
            </span>
          </button>
        ) : (
          <button
            className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
            type='submit'
          >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Publish Post
            </span>
          </button>
        )}

        <button
          type='reset'
          className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
        >
          <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
            Cancel
          </span>
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
