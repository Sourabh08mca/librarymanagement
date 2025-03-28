import { useState } from "react";
import { Card, CardContent } from "./Ui/Card";
import { Button } from "./Ui/Button";  
import { Input } from "./Ui/Input";
import Select from "./Ui/Select"; 

export default function Library() {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [newMember, setNewMember] = useState({ name: "" });
  const [issue, setIssue] = useState({ book: "", member: "" });

  const addBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "" });
    }
  };

  const addMember = () => {
    if (newMember.name) {
      setMembers([...members, newMember]);
      setNewMember({ name: "" });
    }
  };

  const issueBook = () => {
    if (issue.book && issue.member) {
      setIssuedBooks([...issuedBooks, issue]);
      setIssue({ book: "", member: "" });
    }
  };

  return (
    <div className="bg-[url('https://i.pinimg.com/originals/85/6f/31/856f31d9f475501c7552c97dbe727319.jpg')] bg-cover">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Library Management</h1>
        
        {/* Add New Book */}
        <Card className="p-4 mb-4">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Add Book</h2>
            <Input
              placeholder="Book Title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              className="mb-2 hover:scale-105 duration-200"
            />
            <Input
              placeholder="Author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              className="mb-2 hover:scale-105 duration-200"
            />
            <Button  onClick={addBook}>Add Book</Button>
          </CardContent>
        </Card>
        
        {/* Books List */}
        <Card className="mb-4">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2 text-black">Books List</h2>
            <ul>
              {books.map((book, index) => (
                <li key={index} className="border-b py-2 text-black font-semibold font-mono">
                  {book.title} by {book.author}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Add New Member */}
        <Card className="p-4 mb-4">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Add Member</h2>
            <Input
              placeholder="Member Name"
              value={newMember.name}
              onChange={(e) => setNewMember({ name: e.target.value })}
              className="mb-2 hover:scale-105 duration-200"
            />
            <Button onClick={addMember}>Add Member</Button>
          </CardContent>
        </Card>
        
        {/* Members List */}
        <Card className="mb-4">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Members List</h2>
            <ul>
              {members.map((member, index) => (
                <li key={index} className="border-b py-2">
                  {member.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Issue Book */}
        <Card className="p-4 mb-4">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Issue Book</h2>
            <Select
              className="hover:scale-105 duration-200"
              options={books.map((book) => ({ value: book.title, label: book.title }))}
              value={issue.book}
              onChange={(e) => setIssue({ ...issue, book: e.target.value })}
            />
            <Select
              className="hover:scale-105 duration-200 mt-7"
              options={members.map((member) => ({ value: member.name, label: member.name }))}
              value={issue.member}
              onChange={(e) => setIssue({ ...issue, member: e.target.value })}
            />
            <Button onClick={issueBook} className="mt-7">Issue Book</Button>
          </CardContent>
        </Card>
        
        {/* Issued Books List */}
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Issued Books</h2>
            <ul>
              {issuedBooks.map((issue, index) => (
                <li key={index} className="border-b py-2">
                  {issue.book} issued to {issue.member}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
