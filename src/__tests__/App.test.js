import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });
test('displays an image of yourself with alt text identifying the content of the image' , () =>{
    render (<App/>)

    const  image = screen.getByAltText(/a photo of/i);
    expect(image).toBeInTheDocument();
})  

test('A second-level heading with the text `About Me`',()=>{
    render (<App/>)
    const secondlevelheading = screen.getByRole("heading",{
        name:/about me/i,
        level:2,
    })
    expect(secondlevelheading).toBeInTheDocument()
})
test('A paragraph for your biography',()=>{
    render (<App/>)
    const paragraph = screen.getByText(/i like coding/i)
    expect (paragraph ).toBeInTheDocument()
})
test('link to your github account',()=>{
    render(<App/>)
    const githubLink= screen.getByRole('link',{name:/github/i})
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/');
})
test('link to your linkedin account',()=>{
    render (<App/>)
    const linkedinLink=screen.getByRole('link',{name:/linkedin/i})
    expect (linkedinLink).toBeInTheDocument()
    expect (linkedinLink).toHaveAttribute('href','https://linkedin.com')
})