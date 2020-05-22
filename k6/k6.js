import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { Rate } from 'k6/metrics';

let failRate = new Rate('fails');

export let options = {
  vus: 10,
  duration: '30s',
  discardResponseBodies: true, // Don't include body in responses (faster)
  httpDebug: '', // Set to "yes" to see payloads, set to "full" to include html body
  noUsageReport: true, // Don't send test stats to k6
  thresholds: {
    // No request should fail
    fails: [{ threshold: 'rate == 0', abortOnFail: true }],
    // 90% of requests must finish within 400ms, 95% within 800, and 99.9% within 2s
    http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000'],
  },
};

export default function () {
  group('load the homepage', function () {
    let res = http.get(__ENV.SITE_URL);

    let success = check(res, {
      success: (r) => r.status.toString()[0] === '2',
    });

    failRate.add(!success);
  });

  sleep(1);
}
