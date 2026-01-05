# asset/

Static XML data files used as input for the XML processing endpoint.

## Purpose

Contains sample `fuelfacs_host_transaction` XML documents that get read, sanitized (comments/whitespace stripped), and sent to an external replication API.

## Files

| File | Description |
|------|-------------|
| `HostXML-1.xml` | Sample host transaction with trip/order dispatch data |
| `HostXML-2.xml` | Additional sample host transaction |

## XML Structure

```xml
<fuelfacs_host_transaction>
  <transaction_header>
    <transaction_id>...</transaction_id>
  </transaction_header>
  <transactions>
    <trip transaction_operation="...">
      <orders_records>
        <orders>
          <order_dispatch_records>...</order_dispatch_records>
        </orders>
      </orders_records>
    </trip>
  </transactions>
</fuelfacs_host_transaction>
```

## Usage

- Files are auto-discovered by `hostController.js` (reads all `*.xml` files)
- Add new XML files here to include them in batch processing
- Comments and extra whitespace are stripped before transmission
