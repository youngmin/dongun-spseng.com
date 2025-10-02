# Gabia DNS 설정 가이드 (Netlify 연결)

## Option 1: Gabia DNS 유지 (추천)

### 1. Netlify에서 도메인 추가
1. Netlify Dashboard → Domain settings
2. "Add custom domain" 클릭
3. `spseng.com` 입력
4. Netlify가 제공하는 설정값 확인

### 2. Gabia DNS 설정
Gabia 도메인 관리 → DNS 설정에서:

```
Type    Name    Value                   TTL
A       @       75.2.60.5               600
CNAME   www     spseng.netlify.app      600
```

또는 Netlify Load Balancer IP 사용:
```
A       @       75.2.60.5               600
A       @       99.83.231.61            600
CNAME   www     spseng.com              600
```

### 3. SSL 인증서
- Netlify가 자동으로 Let's Encrypt SSL 발급
- 도메인 연결 후 몇 분 내 활성화

## Option 2: Netlify DNS 사용

### 1. Netlify DNS 활성화
1. Domain settings → "Use Netlify DNS"
2. 제공된 네임서버 확인

### 2. Gabia 네임서버 변경
Gabia 관리 페이지에서:
```
1차: ns1.netlify.com
2차: ns2.netlify.com
3차: ns3.netlify.com
4차: ns4.netlify.com
```

### 3. DNS 전파
- 24-48시간 소요
- Netlify Dashboard에서 모든 DNS 레코드 관리

## 여러 도메인 관리 (7개 사이트)

### 각 사이트별 설정:
1. **메인 도메인**: spseng.com
2. **서브 도메인 활용**:
   - construction.spseng.com
   - vehicle.spseng.com
   - agriculture.spseng.com

또는

3. **개별 도메인**:
   - spseng-construction.com
   - spseng-vehicle.com
   - 각각 Gabia에서 동일한 방식으로 설정

## 주의사항

1. **이메일 서비스**:
   - Gabia 이메일 서비스 사용 중이면 MX 레코드 유지
   - Netlify DNS 사용 시 MX 레코드 재설정 필요

2. **TTL 설정**:
   - 변경 전 TTL을 300초로 낮추기
   - 빠른 DNS 전파

3. **도메인 검증**:
   ```bash
   # DNS 확인
   nslookup spseng.com
   dig spseng.com
   ```

## 비용 비교

| 옵션 | 연간 비용 | 장점 | 단점 |
|------|----------|------|------|
| Gabia 유지 + DNS 연결 | 도메인비만 (약 15,000원) | 저렴, 관리 익숙함 | DNS 설정 수동 |
| Netlify 이전 | $15/년 | 통합 관리 | 이전 절차 복잡 |

## 추천: Gabia 도메인 유지 + CNAME/A 레코드 설정

이유:
- 비용 절감
- 이전 절차 불필요
- 즉시 적용 가능
- 이메일 서비스 유지