import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UploadModal from '@/components/upload/UploadModal';

describe('UploadModal', () => {
  it('it should show button to upload image', () => {
    render(<UploadModal />);
    const button = screen.getByText('Upload image');
    expect(button).toBeInTheDocument();
  });

  it('it should open the modal when click the button', () => {
    render(<UploadModal />);
    const button = screen.getByText('Upload image');
    fireEvent.click(button);
    expect(screen.getByText('Upload your image')).toBeInTheDocument();
  });

  it('it should close the modal when click the close button' , () => {
    render(<UploadModal />);
    fireEvent.click(screen.getByText('Upload image'));
    const closeButton = screen.getByText('✕');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Upload your image')).not.toBeInTheDocument();
  });
});
