# ImGen

Welcome to **ImGen**, an AI-powered image generator website that allows users to create their own unique AI-generated images and share them with the world. ImGen leverages the power of deep learning to generate impressive and imaginative visuals based on user input, all while using Cloudinary to store images, MongoDB to store data, and the OpenAI API for AI image generation.

### https://imgen-project.vercel.app/

# How it Works

- **AI Image Generation :** Users can input text prompts or keywords, and the OpenAI API will generate corresponding images.
  
- **Cloudinary Integration :** ImGen integrates with Cloudinary to store and manage all the user-generated images securely.
  
- **MongoDB Database :** User name and image url are stored efficiently in a MongoDB database.
  
- **Share Your Creations :** Once you create an image, easily share it on ImgGen's landing page.
  
- **Explore AI Art :** Take a stroll through the gallery to discover a diverse collection of AI-generated art from other users worldwide.

# Run it Locally
Clone this repository to your local machine.
```
git clone https://github.com/Advaith-RN/ImGen.git
```
### ImGen requires a backend, which runs separately. If you plan to make changes only to the front-end, follow these instructions.

Navigate to the front-end directory.
```
cd client
```
Install dependencies and run the Server
```
yarn        //install dependencies
yarn dev 
```
### To make changes to the backend as well, you will have to make sure all the API calls in your front-end get redirected to your locally running backend.
Currently, the front-end runs off of a remote hosted back-end on Render.
Navigate to the back-end directory
```
cd server
```
Install all dependencies and run it.
```
npm i
npm run dev
```
By default it runs on port 3000. 
- Copy your localhost url. 
- Now go into the server files.
- Replace all instances of https://imgen-qi1o.onrender.com with the localhost url. 
This will ensure that your front-end operates off of the local backend.

Run the front-end as well.
```
yarn dev
```

# Contributions
Contributions are highly encouraged and welcome! Whether you're an AI enthusiast, a web developer, or a designer, there are many ways to contribute to this project. Please feel free to open an issue or submit a pull request with your ideas and enhancements.

# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.























