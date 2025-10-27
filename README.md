# API Testing Project with CI/CD

Dự án test API sử dụng CodeceptJS với CI/CD pipeline tự động.

## 🚀 Tính năng

- ✅ Test API endpoints từ DummyJSON
- 🔄 CI/CD pipeline tự động với GitHub Actions
- 📊 Test reports và artifacts
- 🌐 Deploy reports lên GitHub Pages
- 🧪 Test trên nhiều phiên bản Node.js (16.x, 18.x, 20.x)

## 📋 Các API Tests

Project này test các endpoints sau:

1. **GET /products** - Lấy danh sách tất cả sản phẩm
2. **GET /products/1** - Lấy thông tin sản phẩm cụ thể
3. **POST /products/add** - Thêm sản phẩm mới
4. **PUT /products/1** - Cập nhật sản phẩm
5. **DELETE /products/1** - Xóa sản phẩm

## 🛠️ Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd test-api-1-main

# Cài đặt dependencies
npm install

# Chạy tests
npm test
```

## 🔧 Scripts có sẵn

```bash
npm test          # Chạy tests với reporter spec
npm run test:ci   # Chạy tests cho CI/CD environment
npm run install-deps  # Cài đặt dependencies
```

## 🚦 CI/CD Pipeline

### GitHub Actions Workflows

#### 1. **CI Pipeline** (`.github/workflows/ci.yml`)

- **Trigger**: Push/PR to main, master, develop branches
- **Matrix Testing**: Node.js 16.x, 18.x, 20.x
- **Steps**:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Run tests
  - Upload test artifacts

#### 2. **Deploy Pipeline** (`.github/workflows/deploy.yml`)

- **Trigger**: Successful CI completion
- **Features**:
  - Generate test reports
  - Deploy to GitHub Pages
  - Create dashboard với test results

### Test Artifacts

Sau khi chạy CI/CD, bạn có thể tìm thấy:

- **Test Results**: Trong tab "Actions" → "Artifacts"
- **Test Reports**: Deployed trên GitHub Pages
- **Logs**: Chi tiết trong mỗi workflow run

## 📊 Monitoring và Reports

### GitHub Pages Dashboard

- URL: `https://<username>.github.io/<repository-name>`
- Hiển thị test summary và status
- Links tới GitHub Actions và API docs

### Test Artifacts

- Tự động upload sau mỗi test run
- Retention: 30 ngày
- Bao gồm JSON, XML, HTML reports

## 🔄 Workflow Triggers

| Event        | Trigger             | Mô tả            |
| ------------ | ------------------- | ---------------- |
| Push         | main/master/develop | Tự động chạy CI  |
| Pull Request | main/master         | Test PR changes  |
| Manual       | workflow_dispatch   | Trigger thủ công |
| Schedule     | Có thể thêm cron    | Chạy định kỳ     |

## 📈 Best Practices

### Code Quality

- ✅ All tests phải pass trước khi merge
- ✅ Test coverage monitoring
- ✅ Consistent code formatting

### CI/CD Security

- 🔒 Không commit sensitive data
- 🔒 Sử dụng GitHub Secrets cho credentials
- 🔒 Branch protection rules

### Performance

- ⚡ Parallel test execution
- ⚡ Cache dependencies
- ⚡ Optimized Docker images (nếu cần)

## 🐛 Troubleshooting

### Common Issues

1. **Tests fail locally but pass in CI**

   - Check Node.js version consistency
   - Verify environment variables

2. **GitHub Pages không deploy**

   - Enable Pages in repository settings
   - Check workflow permissions

3. **API timeouts**
   - Check network connectivity
   - Verify API endpoint availability

### Debug Commands

```bash
# Chạy tests với verbose output
npx codeceptjs run --debug

# Kiểm tra config
npx codeceptjs list

# Generate test reports
npx codeceptjs run --reporter allure
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🔗 Links

- [CodeceptJS Documentation](https://codecept.io/)
- [DummyJSON API](https://dummyjson.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Chai Assertion Library](https://www.chaijs.com/)
