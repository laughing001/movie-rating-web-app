// src/__tests__/NoDataDisplay.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // 引入 jest-dom 提供的匹配器
import NoDataDisplay from '../components/NoDataDisplay'; // 确保路径正确

describe('NoDataDisplay', () => {
  it('should render with default message when no message prop is provided', () => {
    render(<NoDataDisplay />);
    // 验证是否显示默认消息
    expect(screen.getByText('没有数据可显示')).toBeInTheDocument();
  });

  it('should render with provided message when message prop is provided', () => {
    const testMessage = '测试消息';
    render(<NoDataDisplay message={testMessage} />);
    // 验证是否显示传递的消息
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
