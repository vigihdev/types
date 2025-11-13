# @types/vigihdev

Type definitions for Vigihdev projects. This package provides TypeScript type definitions for Vigihdev libraries and utilities.

## Installation

```bash
npm install --save-dev @types/vigihdev
```

## Usage

Once installed, TypeScript will automatically recognize the type definitions. No additional configuration is required.

```typescript
import { User, Config, initialize } from "vigihdev";

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

initialize(config);
const user: User = getUser(1);
```

## Available Types

### Interfaces

- **User** - User object interface
- **Config** - Configuration interface

### Functions

- `initialize(config: Config): void` - Initialize the library
- `getUser(id: number): User` - Get user by ID

## Version Compatibility

| @types/vigihdev Version | Vigihdev Version |
| ----------------------- | ---------------- |
| 0.1.0-dev               | 1.x.x            |

## Development

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run in development mode
npm run dev
```

## License

MIT © Vigihdev Developer

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) before submitting issues or pull requests.

---

**Note**: This is a development version (0.1.0-dev) and types may change in future releases.
