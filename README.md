# Number Classification API

## Overview

The **Number Classification API** is a simple RESTful API that takes an integer as input and returns interesting mathematical properties about it.

## Endpoint

### `GET /api/v1/classify-number`

#### Query Parameters

| Parameter | Type    | Required | Description             |
| --------- | ------- | -------- | ----------------------- |
| number    | Integer | Yes      | The number to classify. |

#### Example Request

```
GET /api/v1/classify-number?number=371
```

#### Example Success Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Example Error Response (400 Bad Request)

```json
{
  "error": true,
  "message": "Invalid input. Please provide a valid integer in the query parameter. Example: /api/v1/classify-number?number=371"
}
```

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/Code-Linx/number-classification-api.git
cd number-classification-api
```

### 2. Install Dependencies

```sh
npm install  # For Node.js
```

### 3. Start the Server

```sh
node index.js  # Or use nodemon for development
```

#
