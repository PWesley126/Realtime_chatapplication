body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.chat-container {
  background: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

#chat-box {
  height: 300px;
  border: 1px solid #ccc;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fafafa;
}

#chat-box div {
  margin: 5px 0;
  padding: 8px;
  border-radius: 5px;
  background-color: #e1f5fe;
  max-width: 80%;
}

#chat-form {
  display: flex;
  gap: 10px;
}

#message {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
