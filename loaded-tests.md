```yaml
  # case 01 
  - duration: 30
    arrivalRate: 5    
```

```json
 // Teste sem replica (cron rodando juntamente com a API) 

All virtual users finished
Summary report @ 14:53:33(-0300) 2021-10-29
  Scenarios launched:  150
  Scenarios completed: 131
  Requests completed:  1217
  Mean response/sec: 14.51
  Response time (msec):
    min: 0
    max: 8790
    median: 2120
    p95: 7016.6
    p99: 8210.5
  Scenario counts:
    0: 150 (100%)
  Codes:
    200: 658
    201: 281
    400: 147
    404: 131
```

```json
 // Teste com replica (cron rodando em outra APÍ) 

All virtual users finished
Summary report @ 16:23:02(-0300) 2021-10-29
  Scenarios launched:  150
  Scenarios completed: 128
  Requests completed:  1248
  Mean response/sec: 14.04
  Response time (msec):
    min: 0
    max: 9951
    median: 2775.5
    p95: 7630
    p99: 9569.3
  Scenario counts:
    0: 150 (100%)
  Codes:
    200: 675
    201: 291
    400: 154
    404: 128
  Errors:
    ETIMEDOUT: 13
```


```yaml
  # case 02 
  - duration: 120
    arrivalRate: 25    
```

```json
 // Teste sem replica (cron rodando juntamente com a API) 

All virtual users finished
Summary report @ 17:17:38(-0300) 2021-10-29
  Scenarios launched:  3000
  Scenarios completed: 0
  Requests completed:  127
  Mean response/sec: 23.92
  Response time (msec):
    min: 78
    max: 9960
    median: 5035
    p95: 9675.4
    p99: 9953.8
  Scenario counts:
    0: 3000 (100%)
  Codes:
    201: 120
    400: 7
  Errors:
    ETIMEDOUT: 2993
```

```json
 // Teste com replica (cron rodando em outra API) 

All virtual users finished
Summary report @ 17:02:06(-0300) 2021-10-29
  Scenarios launched:  3000
  Scenarios completed: 34
  Requests completed:  630
  Mean response/sec: 20.84
  Response time (msec):
    min: 0
    max: 10000
    median: 4460
    p95: 9990
    p99: 9998
  Scenario counts:
    0: 3000 (100%)
  Codes:
    200: 139
    201: 366
    400: 91
    404: 34
  Errors:
    ETIMEDOUT: 2943
```

```yaml
  # case 03 
  - duration: 120
    arrivalRate: 10    
```

```json
 // Teste sem replica (cron rodando juntamente com a API) 

All virtual users finished
Summary report @ 17:23:05(-0300) 2021-10-29
  Scenarios launched:  1200
  Scenarios completed: 0
  Requests completed:  24
  Mean response/sec: 6.69
  Response time (msec):
    min: 33
    max: 9996
    median: 3674.5
    p95: 9987.6
    p99: 9996
  Scenario counts:
    0: 1200 (100%)
  Codes:
    200: 14
    201: 10
  Errors:
    ETIMEDOUT: 1200

```

```json
 // Teste com replica (cron rodando em outra APÍ) 

All virtual users finished
Summary report @ 17:27:39(-0300) 2021-10-29
  Scenarios launched:  1200
  Scenarios completed: 44
  Requests completed:  1333
  Mean response/sec: 13.79
  Response time (msec):
    min: 0
    max: 9998
    median: 9337
    p95: 9942.9
    p99: 9988.3
  Scenario counts:
    0: 1200 (100%)
  Codes:
    200: 211
    201: 947
    400: 131
    404: 44
  Errors:
    ETIMEDOUT: 1113

```