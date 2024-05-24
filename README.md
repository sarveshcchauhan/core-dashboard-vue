## Installation Guide

```bash
  git clone https://github.com/sarveshcchauhan/core-dashboard-vue

  cd core-dashboard-vue

  npm install

```

Run the mock server to fetch and add messages

```bash
  npm run json-server
```

Spin the server

```bash
  npm run dev
```

User messages Page url

```bash
  http://{REPLACE_WITH_YOUR_URL}/user
```

## API Reference

#### Get all messages

```http
  GET http://localhost:3000/entries
```

#### Add message

```http
  GET http://localhost:3000/entries
```

| Parameter | Type     | Description      |
| :-------- | :------- | :--------------- |
| `name`    | `string` | add user name    |
| `message` | `string` | add user message |
