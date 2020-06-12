---
id: Checksum
title: Checksum
---

The `checksum` library provides limited apis related to insecure checksum algorithms. These algorithms are NOT cryptographically secure and should not be used for secure information.

```javascript
const checksum = require('checksum');
```

## Module Methods

### `crc16(payload)`
- `payload <string>`
- Returns: an `integer` representing the payload.

Uses the CRC 16 method to retrieve a deterministic 16-bit integer from a string.
