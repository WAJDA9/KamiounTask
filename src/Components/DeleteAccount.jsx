import React from 'react';

function DeleteAccount() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Delete Your Account</h2>
      <p className="text-center mb-6">we're sorry to see you go. It would be great if we could know the reason behind</p>
      <form>
        <p className="text-red-600 text-sm mb-4">Please select one of the below reasons.</p>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="reason" className="mr-2" />
            I have privacy concerns.
          </label>
          <label className="block">
            <input type="radio" name="reason" className="mr-2" />
            I no longer find this useful.
          </label>
          <label className="block">
            <input type="radio" name="reason" className="mr-2" />
            I'm receiving irrelevant email contents.
          </label>
          <label className="block">
            <input type="radio" name="reason" className="mr-2" />
            I'm getting too many emails.
          </label>
          <label className="block">
            <input type="radio" name="reason" className="mr-2" />
            Others.
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Let us know if you have other comments.</label>
          <textarea placeholder="Your comments (Optional)" className="w-full p-2 border border-gray-300 rounded mt-1" maxLength="2000"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default DeleteAccount;
